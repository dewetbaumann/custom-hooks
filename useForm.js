import { useState } from "react";

export const useForm = ( initialState = {} ) => {

    const [values, _setValues] = useState(initialState);

    const reset = () => _setValues(initialState);

    const handleInputChange = ({ target  }) => {
        _setValues({
            ...values,
            [ target.name ]: target.value,
        });
    }

    return [ values,handleInputChange,reset ];
}