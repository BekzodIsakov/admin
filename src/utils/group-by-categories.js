export const groupByCategories = (courses) => {
  const categories = []
  const cache = courses.reduce((acc, item) => {
    const categoryId = item.course.category.id
    if (!categoryId) return acc
    if (Array.isArray(acc[categoryId])) {
      acc[categoryId].push(item)
    } else {
      acc[categoryId] = [item]
      categories.push(item.course.category)
    }

    return acc
  }, {})


  return Object.keys(cache).map((key) => {
    const category = categories.find(item => item.id === key)

    return {
      ...category,
      courses: cache[key].map(item => item.course)
    }
  })
}