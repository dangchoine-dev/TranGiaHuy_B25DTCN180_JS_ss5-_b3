const rawData = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

const parts = rawData.split("-");

let doctorName = parts[0];
doctorName = doctorName.replace("BS.", "");
doctorName = doctorName.replaceAll("_", " ");
doctorName = doctorName.toLowerCase();

doctorName = doctorName
    .split(" ")
    .map(function(word) {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    })
    .join(" ");

let department = parts[1];
department = department.replaceAll("_", " ");
department = department.toLowerCase();

department = department
    .split(" ")
    .map(function(word) {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    })
    .join(" ");

const time = parts[2];

let room = parts[3];
room = room.replace("PHONG_", "Phòng ");

console.log(`
====================================
       PHÂN CÔNG CA KHÁM
====================================
Bác sĩ      : ${doctorName}
Chuyên khoa : ${department}
Thời gian   : ${time}
Phòng khám  : ${room}
====================================
`);