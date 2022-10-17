import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Propscard } from "../component/propscard";


export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
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
              title="LG Gram16 Intel EVO-[12th Gen Core i7/Win11"
              pic="https://m.media-amazon.com/images/I/51I5e7GvGeL._SL1500_.jpg"
              context="Processor & OS: 12th Gen Intel Core Processor i7-1260P (12 Cores: 4P + 8E, P: 2.1 up to 4.7 GHz / E: 1.5 up to 3.4 GHz), L3 Cache 18MB / Window 11"
              link="https://www.amazon.in/gp/product/B0B4VKN5J5/ref=s9_acss_bw_cg_header_4c1_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-6&pf_rd_r=531XFEG62K2BGN1DPADF&pf_rd_t=101&pf_rd_p=95f68241-759f-4e36-bbc3-8997c1a0a68c&pf_rd_i=1375424031&th=1"
            />
          </div>
          <div className="col-3">
            <Propscard
              title="HP Victus AMD Ryzen 5 5600H 16.1 inches(40cm)"
              pic="https://m.media-amazon.com/images/I/71AToeJUPBL._SL1500_.jpg"
              context="Processor: 5th Gen AMD Ryzen 5 5600H (3.3GHz base clock speed, up to 4.2 GHz Max Boost Clock, 16MB L3 cache, 6 core, 12 threads)"
              link="https://www.amazon.in/HP-RX5500M-Graphics-Flicker-16-e0162AX/dp/B098QBT5KT/ref=lp_1375424031_1_4?th=1"
            />
          </div>
        </div>
      </div>
    );
  }
}
