import { Container, Footer } from './components/MainPageStyles';
import { HeaderNavContents } from './components/HeaderNavContents';

function MainPage() {
  return (
    <>
      <Container>
        <HeaderNavContents/>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default MainPage;
