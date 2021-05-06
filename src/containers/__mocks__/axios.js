const unDoList = {
  success: true,
  data: [
    {
      status: 'view',
      value: '神医'
    },
    {
      status: 'view',
      value: '斯特'
    }
  ]
}

export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve) => {
        resolve(unDoList)
      })
    }
  }
}
