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
        options={["1968", "2012"]}
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
          options={["is your main home", "is a holiday home"]}   
        />
        <Qprepop
          id="owned"
          options={["owned with a mortgage", "owned outright", "shared ownership", "rented"]}
        />
        <Qprepop
          id="occupation"
          options={["is occupied solely by you and your family", "2", "3", "4"]}
        />
        <Qprepop
          id="business purposes"
            options={["is not used for business purposes", "2", "3", "4"]}
        />
        <Qprepop
          id="repair"
            options={["is in a good state of repair", "2", "3", "4"]}
        />
        <Qprepop
          id="listed"
            options={["is not a listed building", "2", "3", "4"]}
        />
        <Qprepop
          id="walls"
            options={["has brick walls", "2", "3", "4"]}
        />
        <Qprepop
          id="roof"
            options={["has a tile roof", "2", "3", "4"]}
        />
        <Qprepop
          id="flat-roof"
            options={["doesn't have a flat roof", "2", "3", "4"]}
        />
        <Qprepop
          id="landslip"
            options={["has never shown signs of landslip or heave", "2", "3", "4"]}
        />
        <Qprepop
          id="flooding"
            options={["has never suffered from flooding and is not located in an area that is currently under a flood warning", "2", "3", "4"]}
        />
        <Qprepop
          id="unoccupied"
            options={["is never unoccupied for more than 60 consecutive days", "2", "3", "4"]}
        />
      </section>   
    

    <Footer>
      <div className="navrow">
        <Navbutton type="primary" to="/more-about-you" cta="Next >" />
      </div>
      <div className="saverow">
        <Navbutton type="secondary" cta="Save" to="/more-about-you" />
      </div>
    </Footer>
   </div >
  </main>
  </React.Fragment>
)

export default IndexPage
