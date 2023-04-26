
import CommentCard from '@/components/cards/commentCard'
import CommentInput from '@/components/cards/commentInput'
import PostCard from '@/components/cards/postCard'
import theme from '@/styles/styles'
import { Button, ThemeProvider } from '@mui/material'
import Head from 'next/head'

const commentData = {
    commentId: 4,
    profileImg: '/default.png',
    userName: '사용자 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    createdAt: new Date(),
    updatedAt: new Date(),
    moreBtn: true,
}

export default function Home() {
   
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>HedWig</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
            </main>
        </ThemeProvider>
    )
}
