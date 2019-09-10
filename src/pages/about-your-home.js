import React from "react"
import { Link } from "react-router-dom"


import Qtext from "../components/q_textinput"
import Qselect from "../components/q_select"
import Qyesno from "../components/q_yesno"
import Qbuttons from "../components/q_buttons"
import Qnumbuttons from "../components/q_numbuttons"
import Qrevealer from "../components/q_revealer"
import Qcheckbox from "../components/q_checkbox"
import Qselectclass from "../components/q_select-class"
import Qdate from "../components/q_date"
import Qprepop from "../components/q_prepop"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"
import Licence from "../components/q_licence"
import Header from "../components/header"

const IndexPage = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1567783719/m.cover_new/home_header.png" />
  <main>
    <div className="questions-wrapper">
      <Qbuttons
        id="title"
        question="The property is"
        options={["Owned outright", "Owned with a mortgage", "Shared ownership", "Rented"]}
      />
      <Qyesno id="claims" question="Has anyone living with you had any claims in the last 5 years?" />
      <Qbuttons
        id="cover"
        question="What cover do you need?"
        options={["Buildings & contents", "Buildings only", "Contents only"]}
      />
      <Qbuttons
        id="property-type"
        question="What type of property is it?"
        options={["House", "Bungalow", "Flat/apartment", "Maisonette", "Mobile home"]}
      />
      <Qselect
        id="property-built"
        question="When was the property built?"
        options={["Pre 1837", "1836 - 1919", "1920 - 1945", "1946 - 1979", "1980 - 1989", "1990 - 1999", "2000 - 2008", "2009 - present"]}
      />
      <Qnumbuttons
        id="years-at-property"
        question="How many years have you lived at this property?"
        options={["0","1","2","3","4","5+"]}
      />
      <Qnumbuttons
        id="occupants"
        question="How many people live there?"
        options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11+"]}
      />
      <Qnumbuttons
        id="bedrooms"
        question="How many bedrooms are there?"
          options={["0", "1", "2", "3", "4", "5", "6", "7", "8+"]}
      />
      <Qnumbuttons
        id="bathrooms"
          question="How many bathrooms are there?"
        options={["0", "1", "2", "3", "4", "5","6+"]}
      />
      <section className="prepop-questions">
        <h4>Please check the following statements</h4>
        <h4>This property:</h4>
        <Qprepop
          id="main"
          textbefore="is"
          options={["your main home", "second/holiday home", "let to tenants", "B&B"]}   
        />
        <Qprepop
          id="owned"
          textbefore="is"
          options={["owned with a mortgage", "owned outright", "shared ownership", "rented"]}
        />
        <Qprepop
          id="occupation"
          textbefore="is occupied by you and your family"
          options={["only", "and lodgers", "and paying guests", "and housemates", "and B&B guests"]}
        />
        <Qprepop
          id="business purposes"
          textbefore="is"
          options={["not used for business purposes", "used for childminding", "used for other business use", "used for office use without visitors"]}
        />
        <Qprepop
          id="repair"
          textbefore="is"
          options={["in a good state of repair", "derelict", "undergoing structural work"]}
        />
        <Qprepop
          id="listed"
          textbefore="is"
          options={["not a listed building", "Grade 1 listed", "Grade 2 listed", "Grade 2* listed", "under a preservation order"]}
        />
        <Qprepop
          id="walls"
          textbefore="has walls made of"
          options={["brick", "stone", "concrete", "timber framed with brick", "other"]}
        />
        <Qprepop
          id="roof"
          textbefore="has a roof made of"
          options={["tile", "slate", "concrete", "metal", "asphalt", "fibreglass", "glass", "other"]}
        />
        <Qprepop
          id="flat-roof"
            options={["none", "About 10%", "About 20%", "About 30%", "About 40%", "About 50%", "More than 50%" ]}
            textafter="of the roof is flat"
        />
        <Qprepop
          id="landslip"
            options={["has never", "has"]}
            textafter="shown signs of landslip or heave"
        />
        <Qprepop
          id="flooding"
            options={["has never", "has"]}
            textafter="suffered from flooding and/or is it located in an area that is currently under a flood warning?"
        />
        <Qprepop
          id="unoccupied"
          textbefore="is"
          options={["occupied most of the time", "empty for more than 60 days in a row", "occupied weekdays or weekends only"]}
        />
      </section>   
    

    <Footer>
      <div className="navrow">
        <Navbutton type="primary" to="/more-about-you" cta="Please click the green success button below" />
      </div>
      <div className="saverow">
        
      </div>
    </Footer>
   </div >
  </main>
  </React.Fragment>
)

export default IndexPage
