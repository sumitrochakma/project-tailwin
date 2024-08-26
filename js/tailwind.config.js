tailwind.config = {
  theme: {
    extend: {
      // color part start
      colors: {
        headercolor: '#160C6D',
        btncolor: '#1BBF00',
      },
      // color part end
      // container part start
      maxWidth: {
        headercontainer: '1170px',
        bannercontainer: '900px',
      },
      // container part end
      // font family start
      fontFamily: {
        Open: ['Open Sans ' ],
        papri: ['Paprika ' ],
        
      },
      // font family end
      // Backgraund images start
      backgroundImage: {
        bannerImage: "url('./images/bannerbg.jpg')",
        
      }

      // Backgraund images end
    }
  }
}