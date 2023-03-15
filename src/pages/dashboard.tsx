import React, { useEffect } from 'react'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/router'
import { LayoutMember } from '@/components/layouts/LayoutMember'

const DashboardPage = () => {
    // const { authUser, loading } = useUser()
    // const router = useRouter()

    // // Listen for changes on loading and authUser, redirect if needed
    // useEffect(() => {
    //     if (!loading && !authUser) router.push('/')
    // }, [authUser, loading])
    //
    // if (loading) return <div>Loading...</div>

    return <LayoutMember pageTitle="Dashboard">Content</LayoutMember>
}

export default DashboardPage
