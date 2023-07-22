import { NextResponse } from "next/server"


const posts = [
    {
      "title": "First Post",
      "slug": "abc123",
      "content": "Content of the first post..."
    },
    {
      "title": "Second Post",
      "slug": "def456",
      "content": "Content of the second post..."
    },
    {
      "title": "Third Post",
      "slug": "ghi789",
      "content": "Content of the third post..."
    },
    {
      "title": "Fourth Post",
      "slug": "jkl012",
      "content": "Content of the fourth post..."
    },
    {
      "title": "Fifth Post",
      "slug": "mno345",
      "content": "Content of the fifth post..."
    },
    {
      "title": "Sixth Post",
      "slug": "pqr678",
      "content": "Content of the sixth post..."
    },
    {
      "title": "Seventh Post",
      "slug": "stu901",
      "content": "Content of the seventh post..."
    },
    {
      "title": "Eighth Post",
      "slug": "vwx234",
      "content": "Content of the eighth post..."
    },
    {
      "title": "Ninth Post",
      "slug": "yz1234",
      "content": "Content of the ninth post..."
    },
    {
      "title": "Tenth Post",
      "slug": "567890",
      "content": "Content of the tenth post..."
    }
  ]
  

export async function GET() {
      return await NextResponse.json(posts)
}