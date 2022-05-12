const filter = function(e, filters, categories){
    const id = e.target.id;
    const checked = e.target.checked;
    if(checked){
        filters.push(id);
    } else {
        const index = filters.indexOf(id);
        filters.splice(index,1)
    }
    filters.sort();
    const categoriesToShow = categories.filter(item => filters.includes(item.group));
    if(categoriesToShow.length < 1){
        generateExerciseTypes(categories);
    } else generateExerciseTypes(categoriesToShow);
}