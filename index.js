console.log("hey mami");
const $form = document.forms.TTA_Inputs;
// console.log($form)

const $lacticBtn = document.getElementById("lactic");

const $citricBtn = document.getElementById("citric");

const $dispAns = document.querySelector(".dispAns")

const calcTTA = (val) => {
  return (e) => {
    e.preventDefault();
    const $SampleWeight = $form.sampleWeight.value;

    const $InitialVolume = $form.initialVol.value;

    const $FinalVol = $form.finalVol.value;

    const volDiff = ($FinalVol - $InitialVolume) / $SampleWeight;
    if (typeof volDiff == "number") {
      const Ans = 0.1 * val * volDiff * 100;
        console.log(Ans);
        $dispAns.innerHTML= `<p>= ${Ans}</p>`
      return Ans;
    } else {
      console.log("not a number");
    }
  };
};

$lacticBtn.addEventListener("click", calcTTA(0.09));
$citricBtn.addEventListener("click", calcTTA(0.0641));
