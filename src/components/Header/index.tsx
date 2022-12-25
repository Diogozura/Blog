import Link from 'next/link';
import styled from 'styled-components';

const Topo = styled.header`
background-color: #475F94;
        
`

export default function Header() {
    return (
        <Topo>
            <h1>my Blog</h1> 
            <Link href='/'>top</Link>
        </Topo>
    )
}

