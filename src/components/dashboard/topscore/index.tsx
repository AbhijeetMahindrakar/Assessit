import { sources } from 'next/dist/compiled/webpack/webpack'
import React from 'react'
import styles from './style.module.css'
import account from '../../../../public/images/intake-assessments.svg'
import Image from 'next/image'

export const TOP_SCORE = [
  {
    key: '1',
    image: account,
    name: "Bidyut",
    department: 'Developer',
    score: '90%'
  },
  {
    key: '2',
    image: account,
    name: "Vikash",
    department: 'HR',
    score: '89%'
  },
  {
    key: '3',
    image: account,
    name: "Deepu",
    department: 'Design',
    score: '86%'
  },
  {
    key: '4',
    image: account,
    name: "Akash",
    department: 'Infra',
    score: '83%'
  }
]

const TopScores = () => {
  return (
    <>
      <h5>Top score</h5>
      <table className='table table-hover table-borderless align-items-center  '>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Department</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {TOP_SCORE.map((score) => (
            <tr key={score.key} >
              <td>
                {score.image && <Image height={50} width={30} src={score.image} alt={''} />}
              </td>
              <td>{score.name}</td>
              <td>{score.department}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default TopScores