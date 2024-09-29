export const getCharById = async (id) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);

        if(response.ok){
            const data = await response.json();
            return data;
        }
    
        throw new Error(`Error: Unable to fetch character with ID ${id}`);
    }
    catch(exc) {
      return { exc: exc.message };
    }
};


export const getCharByName = async (name) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);

        if(response.ok){
            const data = await response.json();
            if (data.count === 0) {
                throw new Error(`No character found with name ${name}`);
            }
            return data.results;
        }
        
        throw new Error(`Error: Unable to fetch character with name ${name}`);
        
    }
    catch (exc) {
        return { exc: exc.message };
    }
};