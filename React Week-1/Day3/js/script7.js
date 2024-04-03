var bank_data=[
    {id:3265, branch:"Mumbai", accounts:102830, transactions:{debit:"INR 6.7M", credit:"INR 8.1M"}},
    {id:3266, branch:"Mumbai", accounts:102880, transactions:{debit:"INR 7.7M", credit:"INR 7.1M"}},
    {id:3267, branch:"Dhule", accounts:1038, transactions:{debit:"INR 8.7M", credit:"INR 9.1M"}},
    {id:3268, branch:"Delhi", accounts:104940, transactions:{debit:"INR 9.7M", credit:"INR 2.1M"}},
    {id:3269, branch:"Delhi", accounts:106000, transactions:{debit:"INR 2.7M", credit:"INR 9.1M"}}
]

var unique_branches = new Set();

for (var item of bank_data) {
    unique_branches.add(item.branch);
}

var answer = [];
for (var branch of unique_branches) {
    var addition = 0;
    for (var item of bank_data) {
        if (item.branch == branch) {
            addition += item.accounts;
        }
    }
    answer.push({ [branch]: addition });
}

var answer2 = [];
for (var branch of unique_branches) {
    var credit = 0;
    for (var item of bank_data) {
        if (item.branch == branch) {
            var creditAmount = parseFloat(item.transactions.credit.split(' ')[1]);
            credit += creditAmount;
        }
    }
    answer2.push({ [branch]: credit });
}

var answer3 = [];
for (var branch of unique_branches) {
    var debit = 0;
    for (var item of bank_data) {
        if (item.branch == branch) {
            var debitAmount = parseFloat(item.transactions.debit.split(' ')[1]);
            debit += debitAmount;
        }
    }
    answer3.push({ [branch]: debit });
}

for (var i = 0; i < bank_data.length; i++) {
    if (bank_data[i].accounts < 10000) {
        bank_data.splice(i, 1);
        i--;
    }
}


console.log(answer);
console.log(answer2);
console.log(answer3);
console.log(bank_data);