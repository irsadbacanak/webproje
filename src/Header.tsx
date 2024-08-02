import React, { useState } from 'react';
import { Select, Space } from 'antd';
import {
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import ReactCountryFlag from "react-country-flag";
import './Header.css';

const { Option } = Select;

const Header: React.FC = () => {
    const [language, setLanguage] = useState('TR');

    const handleLanguageChange = (value: string) => {
        setLanguage(value);
        console.log(`Dil değiştirildi: ${value}`);
    };

    return (
        <div>
            <div className="upperHeader">
                <div className="social-media-icons">
                    <Space size="middle">
                        <a href="#"><TwitterOutlined style={{ fontSize: '24px', color: '#fff' }} /></a>
                        <a href="#"><InstagramOutlined style={{ fontSize: '24px', color: '#fff' }} /></a>
                        <a href="#"><LinkedinOutlined style={{ fontSize: '24px', color: '#fff' }} /></a>
                        <a href="#"><YoutubeOutlined style={{ fontSize: '24px', color: '#fff' }} /></a>
                    </Space>
                </div>
                <div className="language-switcher">
                    <Select defaultValue={language} style={{ width: 150, textAlign: "right" }} onChange={handleLanguageChange}>
                        <Option value="TR">
                            <ReactCountryFlag countryCode="TR" svg style={{ marginRight: 8 }} />
                            Türkçe
                        </Option>
                        <Option value="EN">
                            <ReactCountryFlag countryCode="GB" svg style={{ marginRight: 8 }} />
                            English
                        </Option>
                        <Option value="DE">
                            <ReactCountryFlag countryCode="DE" svg style={{ marginRight: 8 }} />
                            Deutsch
                        </Option>
                    </Select>
                </div>
            </div>
            <header className="header">
                <div className="header-content">
                    <h1 className="company-name">ZEPHLEX</h1>
                    <div className="button-container">
                        <button className="login">GİRİŞ YAP</button>
                        <button className="trial">HEMEN DENE</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
