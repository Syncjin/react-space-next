import Layout from '../components/Layout'
import Link from 'next/link'
import axios from 'axios'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)


const Index = (props) => (
  <Layout>
    <h1>next blog</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id={show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
      {/* <PostLink id="Hello-nextjs" title="Hello Next.js" />
      <PostLink id="Learn-nextjs" title="Learn Next.js" />
      <PostLink id="Deploy-nextjs" title="Deploy Next.js" /> */}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  
  console.log(`Show data count: ${res.data.length}`)
  // 서버에 출력됌. 서버에서 페이지가 렌더링되기 때문이다.

  return {
    shows: res.data
  }
}

export default Index
/* 
  error가 날 경우
  1. 페이지 못찾음
  2. 아무일도 안일어남
  3. 문법 에러
  4. Internal Error

  이 에러들을 해결할 경우 Next.js에서는 웹팩의 hot module replacement 기능을 사용한다.

  Link: 클라이언트 사이드로 페이지 이동. 뒤로가기도 마찬가지고 location.history를 통해 적용한다. 래퍼 컴포넌트기 때문에 스타일 prop는 지원되지 않는다. 
  링크는 어떤 컴포넌트와도 동작하지만 조건이 하나 있는것이 onClick prop를 받을 수 있어야 한다는 것이다.

  디렉토리: 특별한 디렉토리는 pages. 나머지는 상관없음
  getInitialProps : static props 이걸 통해 페이지에 비동기로 데이터를 가져와 뿌려준다.
*/