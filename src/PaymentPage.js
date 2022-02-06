import TotalPrice from "./TotalPrice";
import SubmitButton from "./SubmitButton";
import PricesTable from "./PricesTable";
import ThankYouModal from "./ThankYouModal";
import React, { useState } from "react";
import BackButton from "./BackButton";
import AppBarPage from "./AppBarPage";
import NavigateRaffles from "./NavigateRaffles";

export default function PaymentPage(props) {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
  return (
    <>
      <AppBarPage>
        <BackButton />
      </AppBarPage>

      <PricesTable prizes={props.prizesArray} />
      <TotalPrice prizes={props.prizesArray} />
      <SubmitButton setShouldShowThankYouModal={setShouldShowThankYouModal} />
      {shouldShowThankYouModal && (
        <ThankYouModal
          prizesArray={props.prizesArray}
          setShouldShowThankYouModal={setShouldShowThankYouModal}
        />
      )}
      <NavigateRaffles></NavigateRaffles>
    </>
  );
}
