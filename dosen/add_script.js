function fetchMajors(val) {
  console.log(val);

  var majors = [];

  switch (val) {
    case 'Fakultas Teknologi Informasi':
      majors = ['67 - S1 Teknik Informatika', '68 - S1 Sistem Informasi'];
      break;
    case 'Fakultas Psikologi':
      majors = ['80 - S1 Psikologi', '81 - S1 Psikologi Pendidikan'];
      break;

    default:
      majors = [];
      break;
  }

  document.getElementById('select_progdi').innerHTML = '';
  document.getElementById('select_progdi').innerHTML += `
    <option disabled selected>Pilih Progdi</option>`;

  majors.forEach((major) => {
    document.getElementById('select_progdi').innerHTML += `
    <option value="${major}">${major}</option>
    `;
  });
}

function fetchSubjects(val) {
  console.log(val);

  var subjects = [];

  switch (val) {
    case '67 - S1 Teknik Informatika':
      subjects = ['IN315', 'IN316'];
      break;
    case 'Fakultas Psikologi':
      subjects = ['PS311', 'PS312'];
      break;

    default:
      subjects = [];
      break;
  }

  document.getElementById('select_subjects').innerHTML = '';
  document.getElementById('select_subjects').innerHTML += `
    <option disabled selected>Kode Matakuliah</option>`;

  subjects.forEach((subject) => {
    document.getElementById('select_subjects').innerHTML += `
    <option value="${subject}">${subject}</option>
    `;
  });
}
