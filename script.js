/* =====================================================
   HOLE IN ONE - INTERACTIVE GOLF CALCULATOR
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Hole In One JavaScript is running! 🏌️");


    /* =================================================
       CREATE CALCULATOR
       ================================================= */

    const calculator = document.createElement("section");

    calculator.className = "golf-calculator";

    calculator.innerHTML = `
        <div class="calculator-box">

            <h2>🏌️ احسب تكلفة رحلتك</h2>

            <p class="calculator-description">
                اختر الباقة وعدد الأشخاص وعدد الليالي لمعرفة السعر التقريبي.
            </p>

            <div class="calculator-field">

                <label>نوع الباقة</label>

                <select id="packageSelect">

                    <option value="120">
                        الباقة الأساسية - 120$ للشخص
                    </option>

                    <option value="200">
                        الباقة المميزة - 200$ للشخص
                    </option>

                    <option value="300">
                        الباقة الفاخرة - 300$ للشخص
                    </option>

                </select>

            </div>


            <div class="calculator-field">

                <label>عدد الأشخاص</label>

                <input
                    type="number"
                    id="playersNumber"
                    min="1"
                    max="20"
                    value="1"
                >

            </div>


            <div class="calculator-field">

                <label>عدد الليالي</label>

                <input
                    type="number"
                    id="nightsNumber"
                    min="1"
                    max="30"
                    value="1"
                >

            </div>


            <button id="calculatePrice">
                احسب السعر
            </button>


            <div id="priceResult" class="price-result">

                السعر سيظهر هنا

            </div>

        </div>
    `;


    /* =================================================
       ADD CALCULATOR TO PAGE
       ================================================= */

    document.body.appendChild(calculator);


    /* =================================================
       GET ELEMENTS
       ================================================= */

    const packageSelect =
        document.getElementById("packageSelect");

    const playersNumber =
        document.getElementById("playersNumber");

    const nightsNumber =
        document.getElementById("nightsNumber");

    const calculateButton =
        document.getElementById("calculatePrice");

    const priceResult =
        document.getElementById("priceResult");


    /* =================================================
       CALCULATE PRICE
       ================================================= */

    calculateButton.addEventListener("click", function () {

        const pricePerPerson =
            Number(packageSelect.value);

        const players =
            Number(playersNumber.value);

        const nights =
            Number(nightsNumber.value);


        /* التأكد من صحة البيانات */

        if (players < 1 || nights < 1) {

            priceResult.innerHTML =
                "⚠️ يرجى إدخال بيانات صحيحة.";

            priceResult.classList.add("error");

            return;
        }


        /* الحساب */

        const totalPrice =
            pricePerPerson *
            players *
            nights;


        /* عرض النتيجة */

        priceResult.classList.remove("error");

        priceResult.innerHTML = `
            <span>السعر التقريبي</span>

            <strong>
                $${totalPrice.toLocaleString()}
            </strong>

            <small>
                ${players} لاعب × ${nights} ليلة
            </small>
        `;

    });


    /* =================================================
       SMALL INTERACTION
       ================================================= */

    packageSelect.addEventListener("change", function () {

        priceResult.innerHTML =
            "اضغط «احسب السعر» لمعرفة التكلفة.";

    });

});