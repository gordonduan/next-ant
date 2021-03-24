import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import UserTable from '../../components/User/UserTable'

const User = () => {
  const [data, setData] = useState({});
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  });
  const [query, setQuery] = useState({params: pagination});
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await axios.get('/api/user', query);
        setData(result.data.data);
        setPagination({
          current: query.params.index,
          pageSize: query.params.pageSize,
          total: result.data.data.totalCount
        });
        setIsLoading(false);
      };
      fetchData();
    }, [query]);

  const handleTableChange = (pagination, filters, sorter) => {
    setQuery({
      params: {
        index: pagination.current,
        pageSize: pagination.pageSize
      }
    });
  };

  return (
    <UserTable
      dataSource={data.list}
      pagination={pagination}
      loading={isLoading}
      onChange={handleTableChange}
    />
  );
}

export default User;
