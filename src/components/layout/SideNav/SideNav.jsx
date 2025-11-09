import React from 'react';
import NavItem from '../../ui/NavItem/NavItem';
import './SideNav.css';

const navPages = [
    {id: 'intro', name: 'Introduction', path: '/introduction'},
    {id: 'trailer', name: 'Trailer', path: '/trailer'},
    {id: 'gameplay', name: 'Gameplay', path: '/gameplay'},
    {id: 'artists', name: 'Artists', path: '/artists'},
    // { id: 'wiki', name: 'Wiki', path: '/wiki' }, //
    {id: 'auth', name: 'Login / Register', path: '/auth'}
];

const SideNav = () => {
    return (
        <nav className="sideNav">
            {navPages.map(page => (
                <NavItem
                    key={page.id}
                    label={page.name}
                    path={page.path}
                />
            ))}
        </nav>
    );
};

export default SideNav;