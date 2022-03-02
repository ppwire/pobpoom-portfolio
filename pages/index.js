import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Text, Container } from '@chakra-ui/react'
import Profile from '../components/profile'

export default function Home() {
  return (
    <main >
      <Profile></Profile>
    </main>
  )
}
