// addEventListener version
window.addEventListener("offline", (event) => {
    console.log("The network connection has been lost.");
});

// onoffline version
window.ononline = (event) => {
    console.log("The network is connected.");
};

toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: "toastr-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
};

// toastr.success("Content", "Title");

// var data = {
//     Sheet1: [
//         {
//             "Số lượng khoản vay": "From",
//             Column2: "To",
//             Column3: "Có bảo hiểm",
//             Column4: "Không bảo hiểm",
//             "Thưởng mốc": "From",
//             Column7: "To",
//             Column8: "FDSA1",
//             Column9: "FDSA2",
//         },
//         {
//             "Số lượng khoản vay": 1,
//             Column2: 1,
//             Column3: 550000,
//             Column4: 350000,
//             "Thưởng mốc": 1,
//             Column7: 1,
//             Column8: 0,
//             Column9: 0,
//         },
//         {
//             "Số lượng khoản vay": 2,
//             Column2: 2,
//             Column3: 580000,
//             Column4: 380000,
//             "Thưởng mốc": 2,
//             Column7: 2,
//             Column8: 300000,
//             Column9: 300000,
//         },
//         {
//             "Số lượng khoản vay": 3,
//             Column2: 3,
//             Column3: 580000,
//             Column4: 380000,
//             "Thưởng mốc": 3,
//             Column7: 3,
//             Column8: 1000000,
//             Column9: 1500000,
//         },
//         {
//             "Số lượng khoản vay": 4,
//             Column2: 4,
//             Column3: 600000,
//             Column4: 400000,
//             "Thưởng mốc": 4,
//             Column7: 4,
//             Column8: 3000000,
//             Column9: 3500000,
//         },
//         {
//             "Số lượng khoản vay": 5,
//             Column2: 5,
//             Column3: 600000,
//             Column4: 400000,
//             "Thưởng mốc": 5,
//             Column7: 5,
//             Column8: 3000000,
//             Column9: 4000000,
//         },
//         {
//             "Số lượng khoản vay": 6,
//             Column2: 7,
//             Column3: 620000,
//             Column4: 420000,
//             "Thưởng mốc": 6,
//             Column7: 7,
//             Column8: 3000000,
//             Column9: 5000000,
//         },
//         {
//             "Số lượng khoản vay": 8,
//             Column2: 12,
//             Column3: 640000,
//             Column4: 440000,
//             "Thưởng mốc": 8,
//             Column7: 11,
//             Column8: 4000000,
//             Column9: 6000000,
//         },
//         {
//             "Số lượng khoản vay": 13,
//             Column2: 17,
//             Column3: 660000,
//             Column4: 460000,
//             "Thưởng mốc": 12,
//             Column7: 15,
//             Column8: 5000000,
//             Column9: 7000000,
//         },
//         {
//             "Số lượng khoản vay": 18,
//             Column2: 25,
//             Column3: 700000,
//             Column4: 500000,
//             "Thưởng mốc": 16,
//             Column7: 19,
//             Column8: 6000000,
//             Column9: 8000000,
//         },
//         {
//             "Số lượng khoản vay": 26,
//             Column2: 30,
//             Column3: 750000,
//             Column4: 550000,
//             "Thưởng mốc": 20,
//             Column7: 23,
//             Column8: 6500000,
//             Column9: 8500000,
//         },
//         {
//             "Số lượng khoản vay": 31,
//             Column2: 99,
//             Column3: 800000,
//             Column4: 600000,
//             "Thưởng mốc": 24,
//             Column7: 27,
//             Column8: 7000000,
//             Column9: 9000000,
//         },
//         {
//             "Thưởng mốc": 28,
//             Column7: 99,
//             Column8: 7500000,
//             Column9: 9500000,
//         },
//         null,
//         {
//             "Số lượng khoản vay": "Khoản vay",
//             "Thưởng mốc": "Bảo hiểm",
//         },
//         {
//             "Số lượng khoản vay": "From",
//             Column2: "To",
//             Column3: "TicketSize",
//             "Thưởng mốc": "Có",
//         },
//         {
//             "Số lượng khoản vay": 1,
//             Column2: 20000000,
//             Column3: 0.8,
//             "Thưởng mốc": "Không",
//         },
//         {
//             "Số lượng khoản vay": 20000000,
//             Column2: 40000000,
//             Column3: 1,
//         },
//         {
//             "Số lượng khoản vay": 40000000,
//             Column2: 1000000000,
//             Column3: 1.1,
//         },
//         null,
//         null,
//         {
//             "Số lượng khoản vay": "Sản phẩm",
//         },
//         {
//             "Số lượng khoản vay": "Lương nhà nước ",
//             Column3: 1.2,
//         },
//         {
//             "Số lượng khoản vay": "BHNT, Số dư bình quân",
//             Column3: 1.1,
//         },
//         {
//             "Số lượng khoản vay": "LADY (cavet xe, thẻ tín dụng)",
//             Column3: 1,
//         },
//         {
//             "Số lượng khoản vay": "Còn lại (Sim, BHYT, Vay cộng, ...)",
//             Column3: 0.72,
//         },
//     ],
// };

var product = [
    {
        id: -1,
        text: "--- Chọn sản phẩm ---",
    },
    {
        id: 1.2,
        text: "Lương nhà nước",
    },
    {
        id: 1.1,
        text: "BHNT, Số dư bình quân",
    },
    {
        id: 1,
        text: "LADY (cavet xe, thẻ tín dụng)",
    },
    {
        id: 0.72,
        text: "Còn lại (Sim, BHYT, Vay cộng, ...)",
    },
];

function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}

$(function () {
    $("#btn-add").on("click", function () {
        const length = $("#main-table tbody tr").length;
        $("#main-table tbody").append(
            `
            <tr>
                <td class="text-center align-middle">
                    <button class="btn btn-danger" id="btn-delete">
                        <i class="fa fa-times" aria-hidden="true"></i>
                        <span class="px-2">Xoá</span>    
                    </button>
                </td>
                <th class="text-center align-middle">
                    <span class="no">${length + 1}</span>
                </th>
                <td class="text-center align-middle">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="isInsurance${length}" checked field-name="isInsurance">
                        <label class="custom-control-label" for="isInsurance${length}"></label>
                    </div>
                </td>
                <td>
                    <select class="selected form-control" field-name="product"></select>
                </td>
                <td>
                    <input class="form-control text-right" type="text" data-type="number" value="0" field-name="amount">
                </td>
                <td>
                    <input class="form-control text-right" type="text" data-type="number" value="0" readonly field-name="price">
                </td>
                <td>
                    <input class="form-control text-right" type="text" data-type="number" value="0" readonly field-name="product-num">
                </td>
                <td>
                    <input class="form-control text-right" type="text" data-type="number" value="0" readonly field-name="ticket-size">
                </td>
                <td>
                    <input class="form-control text-right" type="text" data-type="number" value="0" readonly field-name="performance-bonus">
                </td>
                <td>
                    <input class="form-control text-right" type="text" data-type="number" value="0" readonly field-name="level-bonus-1" style="background: lightpink;">
                </td>
                <td>
                    <input class="form-control text-right" type="text" data-type="number" value="0" readonly field-name="level-bonus-2" style="background: lightyellow;">
                </td>
                <td>
                    <input class="form-control text-right" type="text" data-type="number" value="${$(
                        "input[field-name='default-risk-bonus']"
                    ).val()}" field-name="risk-bonus">
                </td>
            </tr>
            `
        );

        loanQuantityOnChange();
        calcLevelBonus();
        calcRiskBonus();

        $(".selected").select2({
            theme: "bootstrap",
            data: product,
            allowClear: true, //nút x xoá
            placeholder: {
                id: "-1", // the value of the option
                text: "--- Chọn sản phẩm ---",
            },
            // minimumResultsForSearch: Infinity //ẩn ô tìm kiếm
        });

        $("button#btn-delete").on("click", function () {
            $(this).parents("tr").remove();
            $("#main-table tbody tr").each(function (index, item) {
                $(this)
                    .find(".no")
                    .text(index + 1);
            });
            calcTotalAmount();
            loanQuantityOnChange();
            calcLevelBonus();
            calcRiskBonus();
        });

        $("input[field-name='isInsurance']").on("click", function () {
            loanQuantityOnChange();
        });

        $("select[field-name='product']").on("change", function () {
            const value = $(this).val() || 0;
            $(this)
                .parents("tr")
                .find("input[field-name='product-num']")
                .each(function () {
                    $(this).val(value);
                });
            calcPerformanceBonus();
        });

        $("input[field-name='amount']").on("keyup", function () {
            let ticketSize = 0;
            let totalAmount = $(this).parents("tr").find("input[field-name='amount']").val();
            if (totalAmount == 0) {
                ticketSize = 0;
            } else if (totalAmount < 20000000) {
                ticketSize = 0.8;
            } else if (totalAmount < 40000000) {
                ticketSize = 1;
            } else {
                ticketSize = 1.1;
            }
            $(this)
                .parents("tr")
                .find("input[field-name='ticket-size']")
                .each(function () {
                    $(this).val(ticketSize);
                });
            calcTotalAmount();
            calcPerformanceBonus();
        });

        $("input[field-name='risk-bonus']").on("keyup", function () {
            calcRiskBonus();
        });
    });

    $("#btn-reload").on("click", function () {
        swal({
            title: "Xoá thiệt hăm?",
            text: "Phải tính lại từ đầu đó!",
            icon: "warning",
            buttons: ["Vậy thoi!", "OK xoá luôn!"],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                $("button#btn-delete").each(function () {
                    $(this).trigger("click");
                });
                swal("Xoá rồi nha!", {
                    icon: "success",
                });
            } else {
                swal({
                    button: "OK nhaaa!",
                    text: "Vậy không xoá nữa!",
                });
            }
        });
    });
});

function loanQuantityOnChange() {
    const lenght = $("#main-table tbody tr").length;
    let amount = 0;
    if (lenght == 1) {
        amount = 550000;
    } else if (lenght == 2) {
        amount = 580000;
    } else if (lenght == 3) {
        amount = 580000;
    } else if (lenght == 4) {
        amount = 600000;
    } else if (lenght == 5) {
        amount = 600000;
    } else if (lenght <= 7) {
        amount = 620000;
    } else if (lenght <= 12) {
        amount = 640000;
    } else if (lenght <= 17) {
        amount = 660000;
    } else if (lenght <= 25) {
        amount = 700000;
    } else if (lenght <= 30) {
        amount = 750000;
    } else {
        amount = 800000;
    }
    $("#main-table tbody tr")
        .find("input[field-name='price']")
        .each(function () {
            if (!$(this).parents("tr").find("input[field-name='isInsurance']").is(":checked")) {
                $(this).val(amount - 200000);
                return;
            }
            $(this).val(amount);
        });
    calcPerformanceBonus();
}

function calcTotalAmount() {
    let totalAmount = 0;
    $("input[field-name='amount']").each(function () {
        totalAmount += parseInt($(this).val() || 0);
    });
    $("input[field-name='total-amount']").val(totalAmount);
    calcTotalBonus();
}

function calcPerformanceBonus() {
    let totalPerformanceBonus = 0;
    $("input[field-name='performance-bonus']").each(function () {
        const price = $(this).parents("tr").find("input[field-name='price']").val() || 1;
        const productNum = $(this).parents("tr").find("input[field-name='product-num']").val() || 1;
        const ticketSize = $(this).parents("tr").find("input[field-name='ticket-size']").val() || 1;
        const performanceBonus = parseFloat(price * productNum * ticketSize || 0).toFixed(2);
        console.log("price", price);
        console.log("productNum", productNum);
        console.log("ticketSize", ticketSize);
        console.log("performanceBonus", performanceBonus);
        $(this).val(performanceBonus);
        totalPerformanceBonus += parseFloat(performanceBonus);
        console.log("totalPerformanceBonus", totalPerformanceBonus);
    });
    $("input[field-name='total-performance-bonus']").val(
        parseFloat(totalPerformanceBonus).toFixed(2)
    );
    calcTotalBonus();
}

function calcLevelBonus() {
    const lenght = $("#main-table tbody tr").length;
    let amount1 = 0;
    let amount2 = 0;
    if (lenght < 2) {
        amount1 = 0;
        amount2 = 0;
    } else if (lenght == 2) {
        amount1 = 300000;
        amount2 = 300000;
    } else if (lenght == 3) {
        amount1 = 1000000;
        amount2 = 1500000;
    } else if (lenght == 4) {
        amount1 = 3000000;
        amount2 = 3500000;
    } else if (lenght == 5) {
        amount1 = 3000000;
        amount2 = 4000000;
    } else if (lenght <= 7) {
        amount1 = 3000000;
        amount2 = 5000000;
    } else if (lenght <= 11) {
        amount1 = 4000000;
        amount2 = 6000000;
    } else if (lenght <= 15) {
        amount1 = 5000000;
        amount2 = 7000000;
    } else if (lenght <= 20) {
        amount1 = 6000000;
        amount2 = 8000000;
    } else if (lenght <= 23) {
        amount1 = 6500000;
        amount2 = 8500000;
    } else if (lenght <= 27) {
        amount1 = 7000000;
        amount2 = 9000000;
    } else {
        amount1 = 7500000;
        amount2 = 9500000;
    }
    $("#main-table tbody tr")
        .find("input[field-name='level-bonus-1']")
        .each(function () {
            $(this).val(amount1);
        });
    $("#main-table tbody tr")
        .find("input[field-name='level-bonus-2']")
        .each(function () {
            $(this).val(amount2);
        });
    $("input[field-name='total-level-bonus-1']").val(amount1);
    $("input[field-name='total-level-bonus-2']").val(amount2);
    calcTotalBonus();
}

function calcRiskBonus() {
    let totalRiskBonus = 0;
    $("input[field-name='risk-bonus']").each(function () {
        totalRiskBonus += parseInt($(this).val() || 0);
    });
    $("input[field-name='total-risk-bonus']").val(totalRiskBonus);
    calcTotalBonus();
}

function calcTotalBonus() {
    const totalLevelBonus1 = $("input[field-name='total-level-bonus-1']").val();
    const totalLevelBonus2 = $("input[field-name='total-level-bonus-2']").val();
    const totalRiskBonus = $("input[field-name='total-risk-bonus']").val();
    const totalPerformanceBonus = $("input[field-name='total-performance-bonus']").val();
    $("input[field-name='total-bonus-1']").val(
        new Intl.NumberFormat("vi-VN").format(
            parseFloat(totalPerformanceBonus) +
                parseFloat(totalLevelBonus1) +
                parseFloat(totalRiskBonus)
        )
    );
    $("input[field-name='total-bonus-2']").val(
        new Intl.NumberFormat("vi-VN").format(
            parseFloat(totalPerformanceBonus) +
                parseFloat(totalLevelBonus2) +
                parseFloat(totalRiskBonus)
        )
    );
}

function formatNumber() {
    $("input").each(function () {
        const value = $(this).val().replaceAll(".", "") || 0;
        const valueFormated = new Intl.NumberFormat("vi-VN").format(value);
        $(this).val(valueFormated);
    });
}
