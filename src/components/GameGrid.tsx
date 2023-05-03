import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGamesCount = games?.pages.reduce((total, page) => total + page.results.length,0) || 0

  return (
    <>
        <Box padding="10px">
          {error && <Text>{error.message}</Text>}
          <InfiniteScroll
            dataLength={fetchedGamesCount}
            hasMore={!!hasNextPage }//!! converts undefined to boolan false
            next={() => fetchNextPage()} 
            loader = {<Spinner />}

            >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
              {isLoading &&
                skeletons.map((skeleton) => (
                  <GameCardContainer key={skeleton}>
                    {" "}
                    <GameCardSkeleton />{" "}
                  </GameCardContainer>
                ))}
              {games?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.results.map((game) => (
                    <GameCardContainer key={game.id}>
                      <GameCard game={game} />
                    </GameCardContainer>
                  ))}
                </React.Fragment>
              ))}
            </SimpleGrid>
          </InfiniteScroll>
        </Box>
    </>
  );
};

export default GameGrid;
