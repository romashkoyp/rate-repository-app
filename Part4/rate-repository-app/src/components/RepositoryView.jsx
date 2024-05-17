import React from 'react';
import { Text } from 'react-native';
import Item from './RepositoryItem';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';

const RepositoryView = () => {
  const { id } = useParams();
  const { data, loading, error } = useRepository(id);

  // Log the full response for debugging
  console.log({ data, loading, error });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  // Ensure data is available and properly structured
  const repository = data?.repository;

  if (!repository) {
    return <Text>No repository data available</Text>;
  }

  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
    url,
  } = repository;

  return (
    <Item
      fullName={fullName}
      description={description}
      language={language}
      stargazersCount={stargazersCount}
      forksCount={forksCount}
      reviewCount={reviewCount}
      ratingAverage={ratingAverage}
      ownerAvatarUrl={ownerAvatarUrl}
      url={url}
    />
  );
};

export default RepositoryView;
