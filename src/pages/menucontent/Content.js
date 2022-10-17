import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Propscard } from "../component/propscard";

export class Content1 extends React.Component {
  render() {
    return (
      <>
        <div>
          <div className="row" id="laptops">
            <div className="col-3">
              <Propscard
                title="DELL Alienware x14 Gaming Laptop"
                pic="https://m.media-amazon.com/images/I/51-qYxIfJwL._SX522_.jpg"
                context="Processor: 12th Gen Intel Core i7-12700H (24 MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)"
                link="https://www.amazon.in/Dell-Alienware-i7-12700H-Office21-D569943WIN9/dp/B09TNXP16Y/ref=sr_1_1_sspa?crid=1IQJEAWFOSI6E&keywords=dell+alienware&qid=1663820799&sprefix=dell+aliean+war%2Caps%2C284&sr=8-1-spons&psc=1"
              />
            </div>
            <div className="col-3">
              <Propscard
                title="ASUS ROG Strix G17 (2022)"
                pic="https://m.media-amazon.com/images/I/81isDVo0CmL._SL1500_.jpg"
                context="Processor: AMD Ryzen 7 6800H Mobile Processor, 8-core, 16-thread, 20MB cache, Up to 4.7 GHz max boost"
                link="https://www.amazon.in/ASUS-7-6800H-RTX-3050-Graphics-G713RC-HX009W/dp/B09X5G4J82?ref_=Oct_DLandingS_D_baa8387f_88&smid=A14CZOWI0VEHLG&th=1"
              />
            </div>
            <div className="col-3">
              <Propscard
                title="
              LG Gram16 Intel EVO-[12th Gen Core i7/Win11"
                pic="https://m.media-amazon.com/images/I/51I5e7GvGeL._SL1500_.jpg"
                context="Processor & OS: 12th Gen Intel Core Processor i7-1260P (12 Cores: 4P + 8E, P: 2.1 up to 4.7 GHz / E: 1.5 up to 3.4 GHz), L3 Cache 18MB / Window 11"
                link="https://www.amazon.in/gp/product/B0B4VKN5J5/ref=s9_acss_bw_cg_header_4c1_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-6&pf_rd_r=531XFEG62K2BGN1DPADF&pf_rd_t=101&pf_rd_p=95f68241-759f-4e36-bbc3-8997c1a0a68c&pf_rd_i=1375424031&th=1"
              />
            </div>
            <div className="col-3">
              <Propscard
                title="
              HP Victus AMD Ryzen 5 5600H 16.1 inches(40cm) "
                pic="https://m.media-amazon.com/images/I/71AToeJUPBL._SL1500_.jpg"
                context="Processor: 5th Gen AMD Ryzen 5 5600H (3.3GHz base clock speed, up to 4.2 GHz Max Boost Clock, 16MB L3 cache, 6 core, 12 threads)"
                link="https://www.amazon.in/HP-RX5500M-Graphics-Flicker-16-e0162AX/dp/B098QBT5KT/ref=lp_1375424031_1_4?th=1"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export class Content2 extends React.Component {
  render() {
    return (
      <>
        <div className="row" id="tabs">
          <div className="col-3">
            <Propscard
              title="AMSUNG Galaxy Tab S7+ With Stylus "
              pic="https://rukminim1.flixcart.com/image/416/416/kdrpksw0/tablet/w/f/6/samsung-sm-t975nzkainu-original-imafuhg9tfydgg78.jpeg?q=70"
              context="Thanks to its Quad speaker sound offered by AKG and Dolby Atmos, this tablet is sure to offer an engrossing aural experience."
              link="https://www.flipkart.com/samsung-galaxy-tab-s7-stylus-6-gb-ram-128-rom-12-4-inch-wi-fi-only-tablet-mystic-black/p/itm80b9d6447fa7c?pid=TABFXMJEH5QEFKG6&lid=LSTTABFXMJEH5QEFKG6J3DXJJ&marketplace=FLIPKART&q=samsung+tab&store=tyy%2Fhry&srno=s_1_1&otracker=search&otracker1=search&fm=neo%2Fmerchandising&iid=7854613b-64ce-46fc-8f69-d7a5edc31aea.TABFXMJEH5QEFKG6.SEARCH&ppt=pp&ppn=pp&ssid=g82txzzdnk0000001663827649325&qH=4eacc4d4f4c68d0a"
            />
          </div>
          <div className="col-3">
            <Propscard
              title="realme Pad X"
              pic="https://rukminim1.flixcart.com/image/416/416/xif0q/tablet/y/a/y/-original-imaggfrhvghucswf.jpeg?q=70"
              context="Using a 5G network connectivity option on the realme Pad X Tablet, you can download your favourite movies or music at a lightning-fast speed for a seamless experience."
              link="https://www.flipkart.com/realme-pad-x-6-gb-ram-128-rom-11-inch-wi-fi-5g-tablet-glacier-blue/p/itm3db350b6c0af2?pid=TABGFW8FPKMBEW2H&lid=LSTTABGFW8FPKMBEW2HPVMMWC&marketplace=FLIPKART&q=realme+tab&store=tyy%2Fhry&srno=s_1_6&otracker=search&otracker1=search&fm=Search&iid=579d930c-1d9a-425d-98b1-f8837e64c0d5.TABGFW8FPKMBEW2H.SEARCH&ppt=sp&ppn=sp&ssid=269okeunsw0000001663827847312&qH=c1d6bbebb7ca00e2"
            />
          </div>
          <div className="col-3">
            <Propscard
              title="Oppo Pad Air"
              pic="https://rukminim1.flixcart.com/image/416/416/l5h2xe80/tablet/f/l/g/6650287-oppo-original-imagg55sjgrashbc.jpeg?q=70"
              context="
  Geomagnetic sensor, light sensor, accelerometer, gyroscope, Hall effect sensor, and step counting function"
              link="https://www.flipkart.com/oppo-pad-air-4-gb-ram-128-rom-10-36-inch-wi-fi-only-tablet-grey/p/itm04f80d975342a?pid=TABGFHSKF8CEQPEY&lid=LSTTABGFHSKF8CEQPEYMWD29A&marketplace=FLIPKART&q=oppo+tab&store=tyy%2Fhry&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=923186ee-8267-4507-ada8-603534ce4363.TABGFHSKF8CEQPEY.SEARCH&ppt=sp&ppn=sp&ssid=kzl4l3xupc0000001663828080920&qH=bfa782f8baf57814"
            />
          </div>
          <div className="col-3">
            <Propscard
              title="APPLE iPad Pro "
              pic="https://rukminim1.flixcart.com/image/416/416/kod858w0/tablet/9/5/e/mhqr3hn-a-apple-original-imag2ujngrzwgn6c.jpeg?q=70"
              context="Apple M1 chip for next-level performance
  Stunning 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color"
              link="https://www.flipkart.com/apple-ipad-pro-2021-3rd-generation-8-gb-ram-256-rom-11-inches-wi-fi-only-space-grey/p/itm6dd0764296f1e?pid=TABG2DM4AJNPEJUZ&lid=LSTTABG2DM4AJNPEJUZKIVYR7&marketplace=FLIPKART&q=ipad+&store=tyy%2Fhry&srno=s_1_16&otracker=search&otracker1=search&fm=Search&iid=0d82bb0e-d68c-4f88-aae0-f359eb64c016.TABG2DM4AJNPEJUZ.SEARCH&ppt=pp&ppn=pp&ssid=oogqr0y6800000001663828177667&qH=ae08bc414a738ac5"
            />
          </div>
        </div>
      </>
    );
  }
}

export class Content3 extends React.Component {
  render() {
    return (
      <>
        <div className="row" id="mobiles">
          <div className="col-3">
            <Propscard
              title="SAMSUNG Galaxy S22 Plus 5G"
              pic="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/u/f/p/-original-imaggj68zy3fbtzy.jpeg?q=70"
              context="This phones Auto Framerate adjusts the fps speed to the environment, and its Super Night Solution reduces noise, enabling you to take photographs with stunning detail."
              link="https://www.flipkart.com/samsung-galaxy-s22-plus-5g-green-128-gb/p/itmd68f588073a63?pid=MOBGGG2YKQNZPTGN&lid=LSTMOBGGG2YKQNZPTGN4FR8KX&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=clp_banner_1_8.banner.BANNER_mobile-phones-store_OZ9E8R65SU67&fm=neo%2Fmerchandising&iid=c0960893-872a-4dc5-b6a0-4c8d8eb7c31f.MOBGGG2YKQNZPTGN.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=mto25a4c1s0000001663826924191"
            />
          </div>
          <div className="col-3">
            <Propscard
              title="Xiaomi 11i Hypercharge 5G)"
              pic="https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/k/b/g/-original-imagagf6fzbhuhny.jpeg?q=70"
              context="With 8-band 5G compatibility, the futuristic architecture of this smartphone empowers you with unmatched connectivity, enabling you to stay connected with the world and allowing you to enjoy almost everything that the world has to offer."
              link="https://www.flipkart.com/xiaomi-11i-hypercharge-5g-purple-mist-128-gb/p/itm3440833915be9?pid=MOBG9QWVVTFZB2SY&lid=LSTMOBG9QWVVTFZB2SYGRNPKO&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=clp_banner_1_13.banner.BANNER_mobile-phones-store_8BBWJUJGIOK5&fm=neo%2Fmerchandising&iid=93cb099e-7688-42e9-b7cf-e777d0f4fb2c.MOBG9QWVVTFZB2SY.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=ojo34uzvrk0000001663827134780"
            />
          </div>
          <div className="col-3">
            <Propscard
              title="POCO F4 5G (Nebula Green, 128 GB)"
              pic="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/i/a/x/-original-imagfhuebkbnnfgj.jpeg?q=70"
              context="Dual Stereo Speakers, Hi Res Audio Certified for Wired & Wireless Headphones, Dolby Atmos"
              link="https://www.flipkart.com/poco-f4-5g-nebula-green-128-gb/p/itmff0d134def305?pid=MOBGE853N5EMEHW7&lid=LSTMOBGE853N5EMEHW74T8TXZ&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=clp_banner_1_18.banner.BANNER_mobile-phones-store_1RV80HMU3LOF&fm=neo%2Fmerchandising&iid=4f7f2f8f-abab-4119-93cf-ab237727b393.MOBGE853N5EMEHW7.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=7ydwtzgrjk0000001663827430637"
            />
          </div>
          <div className="col-3">
            <Propscard
              title="APPLE iPhone 13"
              pic="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/h/w/1/iphone-13-mlpg3hn-a-apple-original-imag6vpy84hrnjyz.jpeg?q=70"
              context="Automatically create beautiful depth effects and focus transitions in your videos. Bring a new level of storytelling to the scenes you shoot."
              link="https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f?pid=MOBG6VF5ADKHKXFX&lid=LSTMOBG6VF5ADKHKXFX4LCPEV&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=clp_banner_1_50.banner.BANNER_mobile-phones-store_OJKBI6UUG0WR&fm=neo%2Fmerchandising&iid=ea4fa21d-34b2-4d15-93b7-b69f22710777.MOBG6VF5ADKHKXFX.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=clp6bzwnk00000001663827477570"
            />
          </div>
        </div>
      </>
    );
  }
}
