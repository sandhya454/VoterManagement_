import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './Data.css'

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [filteredInfo, setFilteredInfo] = useState({});
  const [originalData,setOriginalData]=useState([])

  const fetchData = async () => {
    try {
      // Replace 'your-api-endpoint' with the actual API endpoint
      const response = await fetch('https://admin-api.stepnext.com/admin/get-all-data');
      const result = await response.json();
      setData(result);
      setOriginal(result)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <span style={{ backgroundColor: '#ffc069' }}>{text}</span>
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
    setData(originalData)
  };

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
  };

  const columns = data.length > 0 ? Object.keys(data[0]).map((key) => ({
    title: key,
    dataIndex: key,
    key: key,
    ...getColumnSearchProps(key),
  })) : [];

  const initialCount = data.length;
  const filteredCount = data.filter((record) =>
    Object.keys(filteredInfo).every((key) => {
      const filterValue = filteredInfo[key];
      return !filterValue || record[key].toString() === filterValue[0];
    })
  ).length;

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <strong>Initial Count:</strong> {initialCount}
        <br />
        <strong>Filtered Count:</strong> {filteredCount}
      </div>
      <Table
       className='MainContTable'
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={(record) => record.id} // Change 'id' to the actual key property of your data
        onChange={handleChange}
      />
    </>
  );
};

export default DataTable;
