import { Stack } from "@mantine/core";
import Home from "./Home/home";
import About from "./About/about";
import Footer from "./Footer/footer";


export default function Page() {
  return (
    <Stack w={"100%"} h={"100%"} gap={0} mt={0} mb={0}>
      <Home/>
      <About/>
      <Footer/>
    </Stack>
    
  );
}
