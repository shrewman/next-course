import Link from 'next/link'
import React from 'react'

const NotFoundUser = () => {
  return (
    <div className="top-1/2 left-0 mx-auto flex flex-col justify-center items-center bg-slate-300 rounded-xl text-center h-32 w-2/3">
      <div className="text-xl font-bold mb-3">The requested user doesn't exist</div>
      <Link href="/users" className="btn btn-sm btn-secondary">Go Back</Link>
    </div>
  )
}

export default NotFoundUser
