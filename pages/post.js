import Layout from '../components/Layout'
import axios from 'axios'

const Post = props => {
  console.log('위치',props.show) //서버, 클라이언트 둘다 출력 서버에서 출력하면 서버사이드 렌더링인 되어있기때문이다.
  return (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
)}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)

  console.log(`show name: ${res.data.name}`) // 서버에서 출력

  return {
    show: res.data
  }
}

export default Post

/* 
  url prop: 이것은 페이지의 메인 컴포넌트에만 전달되기 때문에 에러를 일으킨다. 
  따라서 꼭 위와 같이 프롭스를 직접 넘겨줘야한다.
*/