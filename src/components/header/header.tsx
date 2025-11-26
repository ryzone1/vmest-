import React, { FC } from 'react';

export interface HeaderProps {
    appName: string;
}

export const Header: FC<HeaderProps> = props => {
    const { appName } = props;

        return (
        <div>
            <h1>{appName}</h1>
        </div>
    );
}; 