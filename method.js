// const user={
//     name:'rakib',
//     age:35,
//     id:38035
// }
// const keys=Object.keys(user);
// const values=Object.values(user);
// const entries=Object.entries(user);
// // console.log(entries)
// for(let elem of entries){
//     const [key,value]=entries;
//     console.log(key,value)
// }


const birthCertificate={
    name:'rakib',
    birthDate:'05-05-2000',
    cerNumber:"8473784563487"
}
Object.freeze(birthCertificate);
delete birthCertificate.name;
birthCertificate.cerNumber="123";
console.log(birthCertificate)
