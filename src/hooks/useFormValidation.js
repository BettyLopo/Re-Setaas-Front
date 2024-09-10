import { useState } from "react";


const useFormValidation = (initialValues) => {
  
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = validate(values);
        setErrors(newErrors);
        return Object.values(newErrors).some((error) => error === true);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        validateFields,
        handleChange,
        resetForm
    };
};

export const validateCreateForm = (values) => {
    return {
        title: values.title.trim() === "",
        category: values.category === "",
        image: values.image === "",
        duration: values.duration === "",
        ingredients: values.ingredients.trim() === "",
        tools: values.tools.trim() === "",
        steps: values.steps.trim() === "",
    }
}

export const validateEditForm = (values) => {
    return {
        title: values.title.trim() === "",
        category: values.category === "",
        image: values.image === "",
        duration: values.duration === "",
        ingredients: values.ingredients.trim() === "",
        tools: values.tools.trim() === "",
        steps: values.steps.trim() === "",
    }
}

export const validateLoginForm = (values) => {
    return {
        email: values.email.trim() === "",
        password: values.password.trim() ===","
    };
};

export const validateRegisterForm = (values) => {
    return {
        username: values.username.trim() === "",
        email: values.email.trim() === "",
        password: values.password.trim() === "",
        profile: values.profile.trim() === "",
    };
};

export default useFormValidation
