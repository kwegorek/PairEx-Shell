const pwd = require('./pwd')
const ls = require('./ls')

process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
        

  // console.log('pwd runnig', pwd(data))

  if(cmd.toLowerCase() === 'pwd'){
    pwd()

  }
  else if (cmd === 'ls'){
    ls()
  }

  process.stdout.write('\npromt > ');
})
