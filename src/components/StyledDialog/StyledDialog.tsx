import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import Dialog, { DialogProps, dialogClasses } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import StyledDialogTitle from './StyledDialogTitle';

const StyledDialogComponent = styled(Dialog)(() => ({
    [`& .${dialogClasses.paper}`]: {
        background: '#494949',
        color: 'white',
        borderRadius: '20px',
    },
}));

export interface StyledDialogProps extends DialogProps {
    title?: string;
}

export const StyledDialog: FC<StyledDialogProps> = (props) => {
    return (
        <StyledDialogComponent {...props}>
            <StyledDialogTitle onClose={props.onClose}>
                {props.title}
            </StyledDialogTitle>
            <DialogContent>{props.children}</DialogContent>
        </StyledDialogComponent>
    );
};

export default StyledDialog;
