var tableData = [{
    'StrategiPembangunan': 'Memperkuat pelaksanaan protokol kesehatan secara paripurna dalam setiap aktivitas ekonomi',
    'InstansiPenanggungJawab': 'Kementrian kesehatan dan Satgas COVID Provinsi',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Meningkatkan kerjasama dengan beberapa kementrian dan lembaga dalam meningkatkan kemudahan berwisata',
    'InstansiPenanggungJawab': 'Kemenkumham dan kemenlu',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Mempromosikan pelaksanaan Work From Bali untuk instansi Pemerintah/BUMN/swasta',
    'InstansiPenanggungJawab': 'Kemenkomarves,kemkominfo',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Membuka Bali sebagai pintu masuk internasional untuk essential bussines dan charter flight untuk wisatawan manca negara',
    'InstansiPenanggungJawab': 'Kemenparekraf',
    'KuartalPelaksanaan': 'Semester I 2022',
},
{
    'StrategiPembangunan': 'Mempersiapkan Bali sebagai tuan rumah KTT G20 2022, meliputi persiapan infrastruktur, dll',
    'InstansiPenanggungJawab': 'Kemenkomarves',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Memperkuat sosialisasi program 5M',
    'InstansiPenanggungJawab': 'Kementrian kesehatan',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Memperkuat sosialisasi dan pelaksanaan pedoman kesehatan dan keselamatan terbaru kepada pemangku adat dan banjar',
    'InstansiPenanggungJawab': 'Kementrian kesehatan',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Mempercepat pelaksaan vaksinasi dosis kedua hingga mencapai 100% target, termasuk penambahan fasilitas layanan kesahatan',
    'InstansiPenanggungJawab': 'Kementrian kesehatan',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'memperkuat pelaksaan 3T (testing, tracing, treatment) bagi wisatawan atau warga setempat',
    'InstansiPenanggungJawab': 'Kementrian kesehatan',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Meningkatkan kapasitas tenaga medis termasuk tenaga relawan',
    'InstansiPenanggungJawab': 'Kemenaker',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Memperkuat program bantuan sosial tunai untuk siswa sekolah swasta tingkat SD, SMP, SMA, SLB',
    'InstansiPenanggungJawab': 'Kementrian sosial',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Peningkatan pembangunan infrastruktur pedesaan bersifat padat karya (jalan, desa, Jembatan, Desa wisata)',
    'InstansiPenanggungJawab': 'Kementrian PUPR',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Meningkatkan penyaluran kredit dengan suku bunga rendah melalui kredit usaha rakyat',
    'InstansiPenanggungJawab': 'kementrian perekonomian',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'Meningkatkan fasilitas dan penyaluran program bantuan produktif usaha mikro bagi usaha mikro',
    'InstansiPenanggungJawab': 'Kementrian sosial',
    'KuartalPelaksanaan': 'Semester II 2021',
},
{
    'StrategiPembangunan': 'memfasilitasi usaha industri padat karya dengan mengoptimalkan sumber daya lokal yang berorientasi ekspor',
    'InstansiPenanggungJawab': 'Kementrian Perindustrian',
    'KuartalPelaksanaan': 'Semester II 2021',
},


]


/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/


var state = {
'querySet': tableData,

'page': 1,
'rows': 5,
'window': 3,
}

buildTable()

function pagination(querySet, page, rows) {

var trimStart = (page - 1) * rows
var trimEnd = trimStart + rows

var trimmedData = querySet.slice(trimStart, trimEnd)

var pages = Math.round(querySet.length / rows);

return {
    'querySet': trimmedData,
    'pages': pages,
}
}

function pageButtons(pages) {
var wrapper = document.getElementById('pagination-wrapper')

wrapper.innerHTML = ``
console.log('Pages:', pages)

var maxLeft = (state.page - Math.floor(state.window / 2))
var maxRight = (state.page + Math.floor(state.window / 2))

if (maxLeft < 1) {
    maxLeft = 1
    maxRight = state.window
}

if (maxRight > pages) {
    maxLeft = pages - (state.window - 1)
    
    if (maxLeft < 1){
        maxLeft = 1
    }
    maxRight = pages
}



for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
}

if (state.page != 1) {
    wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
}

if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
}

$('.page').on('click', function() {
    $('#table-body').empty()

    state.page = Number($(this).val())

    buildTable()
})

}


function buildTable() {
var table = $('#table-body')

var data = pagination(state.querySet, state.page, state.rows)
var myList = data.querySet

for (var i = 1 in myList) {
    
    var row = `<tr>
              <td>${myList[i].StrategiPembangunan}</td>
              <td>${myList[i].InstansiPenanggungJawab}</td>
              <td>${myList[i].KuartalPelaksanaan}</td>
              `
    table.append(row)
}

pageButtons(data.pages)
}
