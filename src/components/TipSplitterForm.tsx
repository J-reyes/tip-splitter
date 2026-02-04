import type { TipSplitterValues } from "../types";

interface TipSplitterFormProps {
  handleChange: (inputName: string, newValue: string | boolean) => void;
  values: TipSplitterValues;
}

export default function TipSplitterForm({
  handleChange,
  values,
}: TipSplitterFormProps) {
  console.log(values);

  return (
    <section>
      <form>
        <label>
          Bill Amount: $
          <input
            type="number"
            name="billAmount"
            value={values.billAmount}
            onChange={(e) => handleChange("billAmount", e.target.value)}
          />
        </label>

        <label>
          Tip Percentage:
          <input
            name="tipPercentage"
            value={values.tipPercentage}
            onChange={(e) =>
              handleChange("tipPercentage", e.target.value)
            }
          />
        </label>

        <label>
          Number of People:
          <input
            type="number"
            name="numberOfPeople"
            value={values.numberOfPeople}
            onChange={(e) =>
              handleChange("numberOfPeople", e.target.value)
            }
          />
        </label>
      </form>
    </section>
  );
}
