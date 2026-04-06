import Hero from "./components/Hero";
import Body from "./components/Body";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/Image3.png";
import image4 from "./assets/Image4.png";
import image5 from "./assets/Image5.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";
import image8 from "./assets/Image8.png";
import image9 from "./assets/Image9.png";

function App() {

  return (
    <>
      <Hero title="Material 3 Design Kit " backgroundImage1={image1}
        backgroundImage2={image2} />
      <Body
        imageSrc={image3}
        title="Guidance"
        description="Material.io supports this design kit with documentation and guidance for how to use the components and styles."
        subDescription="Our specifications have been updated for Material 3 to provide for additional guidance for modern styling, adaptive guidance, and color."
        linkLabel="Material.io"
        linkUrl="https://m3.material.io/"
      />
      <Body
        imageSrc={image4}
        title="Platforms"
        description="The Material 3 Design Kit is a multi-platform design library for building with the Material 3 Design System."
        subDescription="It serves as a comprehensive framework to help designers and developers in crafting beautiful interfaces across platforms such as Android, Flutter, Jetpack Compose, and Web."
      />
      <Body
        imageSrc={image5}
        title="Typography"
        description="Google Fonts makes it easy to bring personality and performance to your websites and products. Our catalog of open-source fonts makes it easy to integrate expressive type and icons seamlessly—no matter where you are in the world."
        subDescription="Our font catalog places typography front and center, inviting you to explore, sort, and test fonts for use in more than 135 languages."
        linkLabel="fonts.google.com"
        linkUrl="https://fonts.google.com/"
      />
      <Body
        imageSrc={image6}
        title="Symbols"
        description={
          <>
            <a href="https://m3.material.io/styles/icons/" style={{ color: '#6750a4', textDecoration: 'none', fontWeight: 'bold' }}>
              Material Symbols
            </a>
            {" are Google’s newest icons consolidating over 2,500 glyphs in a single font file with a wide range of design variants. Symbols are available in three styles with four adjustable variable font options (Fill, Weight, Grade, and Optical size)."}
          </>
        }
        subDescription={<>{"Using the "} {<a href="https://m3.material.io/styles/icons/" style={{ color: '#6750a4', textDecoration: 'none', fontWeight: 'bold' }}>
          Material Symbols plugin
        </a>} {", designers can easily search and add symbols in Figma, creating a more efficient design workflow. "}</>}
        linkLabel="figma.com/@googlefonts"
        linkUrl="https://figma.com/@googlefonts"
      />
      <Body
        imageSrc={image7}
        title="Colors"
        description="Color is used to express style and communicate meaning. With dynamic color, Material puts personal color preferences and individual needs at the forefront of systematic color application."
        subDescription="Material You reimagines color as a more individualized experience with dynamic and accessible color expression. "
        linkLabel="Material Theme Builder plugin"
        linkUrl="figma.com/community/plugin/1034969338659738588/material-theme-builder"
      />
      <Body
        imageSrc={image8}
        title="Themes"
        description="Use the Material Theme Builder to explore dynamic color, build a custom theme, and export code through generated Material Design tokens. "
        subDescription="Built to work with Material Design components by selecting components and swapping to your theme or updating the M3 theme. Turn on state layers within settings to update all component layers."
        linkLabel="Material Theme Builder plugin"
        linkUrl="figma.com/community/plugin/1034969338659738588/material-theme-builder"
      />
      <Body
        imageSrc={image9}
        title="Feedback"
        description={
          <div style={{ lineHeight: '1.6', color: '#444' }}>
            <p>
              Have feedback for the Material Design team?<br />
              We’d love to hear what you think.<br />
              <a href="#" style={{ color: '#6750a4', textDecoration: 'underline' }}>Material Design Kit feedback form</a>
            </p>

            <p style={{ marginTop: '20px' }}>
              Further suggestions and/or questions?<br />
              Email <a href="mailto:m3-design-kit-feedback@google.com" style={{ color: '#6750a4', textDecoration: 'underline' }}>m3-design-kit-feedback@google.com</a>
            </p>

            <p style={{ marginTop: '20px' }}>
              You can also <a href="https://twitter.com/materialdesign" style={{ color: '#6750a4', textDecoration: 'underline' }}>@materialdesign</a> on Twitter.
            </p>

            <p style={{ marginTop: '25px', fontSize: '0.9em' }}>
              This resource is available under <a href="#" style={{ color: '#6750a4', textDecoration: 'underline' }}>CC BY 4.0</a>. By
              downloading this file, you agree to the <a href="#" style={{ color: '#6750a4', textDecoration: 'underline' }}>Google Terms
                of Service</a>. The <a href="#" style={{ color: '#6750a4', textDecoration: 'underline' }}>Google Privacy Policy</a> describes how
              data is handled in this service.
            </p>
          </div>
        }
        subDescription=""
        linkLabel="Material Theme Builder plugin"
        linkUrl="https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder"
      />
    </>
  )
}

export default App
