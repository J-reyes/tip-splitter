import type { TipSplitterValues } from "../types";
import {formatTipPercentage, formatter} from "../utils/TipSplitterHelpers";

interface ResultsProps {
  values: TipSplitterValues;
}

export default function Results({ values }: ResultsProps) {
    const formattedTip = formatTipPercentage(values.tipPercentage);
    const tipAmountPerPerson = values.billAmount * formattedTip / values.numberOfPeople;

  return (
    <section>
        <h3>Results</h3>
        <p>Bill Amount: {values.billAmount}</p>
        <p>Tip %: {formattedTip}</p>
        <p>Number of People: {values.numberOfPeople}</p>
        <p>Tip amount per person: {formatter.format(tipAmountPerPerson)}</p>
        <p>Total Amount: {formatter.format(values.billAmount + (values.billAmount * values.tipPercentage / 100))}</p>
    </section>
  )
}