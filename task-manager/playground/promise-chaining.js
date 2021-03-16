require('../src/db/mongoose');
const User = require('../src/models/user');

//604c9283d3dfad44045a853d


const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {$set :  {age: age}}, {new: true})
    const count = await User.countDocuments({age}) 
    return count
}

updateAgeandCount('604c9c56ab5844252c579901', 21).then((res)  => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})