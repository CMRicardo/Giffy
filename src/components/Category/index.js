import React from 'react'
import { Link } from 'wouter'

export const Category = trend => {
	return <Link to={`/search/${trend.name}`}>{trend.name}</Link>
}
