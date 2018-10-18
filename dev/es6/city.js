((d)=>{
    const classBody = d.body;
    let city = ''
    if (classBody.classList.contains('page-gdl')){
        city = [...d.querySelectorAll('.gdl')];
    }else if ((classBody.classList.contains('page-leon'))){
        city = [...d.querySelectorAll('.leon')];
    }else if ((classBody.classList.contains('page-qrt'))){
        city = [...d.querySelectorAll('.qrt')];
    }
    city.map(el => {
        el.classList.add('show')
    })
})(document);


