import NextAuth, { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import KeycloakProvider from 'next-auth/providers/keycloak'

declare module 'next-auth/jwt' {
    interface JWT {
        id_token?: string
        provider?: string
        access_token?: string
    }
}

declare module 'next-auth' {
    interface Session {
        user: {
            id?: string
            access_token?: string
            roles?: string[]
            name?: string
            email?: string
            image?: string
        }
    }
}

const authOptions = {
    providers: [
        KeycloakProvider({
            clientId: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_AUTH_CLIENT_SECRET!,
            issuer: process.env.NEXT_PUBLIC_AUTH_ISSUER!
        })
    ],
    callbacks: {
        async session({ session, token }: {session: Session, token: JWT}) {
            session.user.id = token!.id_token;
            session.user.access_token = token!.access_token;
            session.user.roles = JSON.parse(Buffer.from(token.access_token!.split('.')[1], 'base64').toString()).realm_access.roles
            return session;
        },
        async jwt({ token, account }: {token: JWT, account: any}) {
            if (account) {
                token.id_token = account.id_token
                token.provider = account.provider
                token.access_token = account.access_token
            }
            return token
        },
    },
    events: {
        async signOut({ token }: {token: JWT}) {
            if (token.provider === 'keycloak') {
                const logOutUrl = new URL(`${process.env.NEXT_PUBLIC_AUTH_ISSUER}/protocol/openid-connect/logout`)
                logOutUrl.searchParams.set("id_token_hint", token.id_token!)
                await fetch(logOutUrl);
            }
        },
    },
    secret: "de2R96laWDRcvSYsvgboNxnzVQOn970ufvmTLifk998="
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }