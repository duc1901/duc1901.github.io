let sum = num => num ? sum(num - 1) + num : 0
document.write("Tổng từ 1 đến " + 9 + " là: " + sum(9));