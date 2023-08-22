import { Container, Footer, GitHub } from './components/MainPageStyles';
import { HeaderNavContents } from './components/HeaderNavContents';

function MainPage() {
  return (
    <>
      <Container>
        <HeaderNavContents/>
        <Footer>
          <GitHub>https://github.com/CSID-DGU/2023-S-VSA-OASIS-9/tree/code-review</GitHub>
        </Footer>
      </Container>
    </>
  );
}

export default MainPage;
