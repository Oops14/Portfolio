import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components/Button";

export const ContactForm = () => {
    return (
        <FormWrapper>
            <Form>
                <Label>Name</Label>
                <FromInput type="text" />
                <Label>Email</Label>
                <FromInput type="email" />
                <Label>Message</Label>
                <FromTextArea />
                <Button href="#" primary>
                    Submit
                </Button>
            </Form>
        </FormWrapper>
    );
};

const FormWrapper = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 475px;

    ${Button} {
        text-align: center;
    }

    input,
    textarea {
        border: 1px solid #bdebea;
        outline: none;
        background-color: transparent;
        border-radius: 6px;
        color: #fff;
    }
`;

const Label = styled.label`
    font-size: 12px;
    margin-bottom: 3px;
`;

const FromInput = styled.input.attrs((props) => ({
    type: props.type,
}))`
    padding: 9px 10px;
    margin-bottom: 20px;
`;

const FromTextArea = styled.textarea`
    height: 165px;
    margin-bottom: 15px;
    padding: 10px;
`;
