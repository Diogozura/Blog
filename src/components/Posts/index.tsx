import * as React from 'react';
import { BlocoPost } from './Post';
import styled from 'styled-components';
import Image from 'next/image';
import img from '../../../public/img.png'

export default function Posts({ posts }:any) {
    console.log("dados post", posts.allPosts
    )
    return (
        <>
            eu sou um post 
            <Section>
           
           
            {posts?.allPosts?.map((post: any) => (
                <BlocoPost key={post.id}>
                    <Image alt='babalu' src={img} layout="" />
                    <h2 >{post.title}</h2>
                </BlocoPost>
              
            ))}
                 </Section>
        </>
    )
}

const Section = styled.section`
    display: flex;
    width: 90%;
    margin: auto;
`