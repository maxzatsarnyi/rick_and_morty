import React from 'react';
import { PaginationContainer, PaginationWrapper, PaginationList, PaginationItem, PaginationLink } from './PaginationElements';


const Pagination = ({currentPage, postsPerPage, totalPosts, changePage }) => {
  const pageNumbers = [];
                      // 20/10 = 2 pages 
  const pages = totalPosts / postsPerPage;
  for (let i = 1; i <= Math.ceil(pages+1); i++) {
    pageNumbers.push(i);
  }
  
// 2 pages > 
  return (
    <>
      <PaginationContainer>
        <PaginationWrapper>
          <PaginationList>
            {pageNumbers.map(number => (
            <PaginationItem key={number} >
              <PaginationLink 
                style={{color: currentPage === number ? 'silver' : 'black' }} 
                onClick={() => {
                changePage(number)
              }} href={`#`}>
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
          </PaginationList>
        </PaginationWrapper>
      </PaginationContainer>
    </>
  );
};

export default Pagination;
