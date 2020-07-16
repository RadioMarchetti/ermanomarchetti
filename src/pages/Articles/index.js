import React, { useState } from 'react'

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';
import { Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import radioPP from '../../assets/images/radioPP.png'

export default function Articles() {
  const [loading, setLoading] = useState(true)
  return (
    <>
      <Header />
      <div className="content">
        { loading ? 
          <article className="article">
            <Skeleton variant="rect" height="15rem">
              <img src={radioPP} className="image" />
            </Skeleton>
            <Skeleton variant="text" >
              <h1 className="title">SandrinhaMine25</h1>
            </Skeleton>
            <div className="author-info">
              <Skeleton variant="circle" >
                <Avatar className="author-avatar"/>
              </Skeleton>
              <section>
                <Skeleton variant="text" >
                  <p className="text author-name">Rádio Marchetti</p>
                </Skeleton>
                <Skeleton variant="text" >
                  <p className="text date">15/01/1970</p>
                </Skeleton>
              </section>
            </div>
          </article>
        : 
          <article className="article">
            <img src="http://eeem.herokuapp.com/random/image" className="image" />
            <h1 className="title">SandrinhaMine25</h1>
            <div className="author-info">
              <Avatar className="author-avatar" src={radioPP} />
              <section>
                <p className="text author-name">Rádio Marchetti</p>
                <p className="text date">15/01/1970</p>
              </section>
            </div>
          </article>
        }
        { loading ? 
          <article className="article">
            <Skeleton variant="rect" height="15rem">
              <img src={radioPP} className="image" />
            </Skeleton>
            <Skeleton variant="text" >
              <h1 className="title">SandrinhaMine25</h1>
            </Skeleton>
            <div className="author-info">
              <Skeleton variant="circle" >
                <Avatar className="author-avatar"/>
              </Skeleton>
              <section>
                <Skeleton variant="text" >
                  <p className="text author-name">Rádio Marchetti</p>
                </Skeleton>
                <Skeleton variant="text" >
                  <p className="text date">15/01/1970</p>
                </Skeleton>
              </section>
            </div>
          </article>
        : 
          <article className="article">
            <img src="http://eeem.herokuapp.com/random/image" className="image" />
            <h1 className="title">SandrinhaMine25</h1>
            <div className="author-info">
              <Avatar className="author-avatar" src={radioPP} />
              <section>
                <p className="text author-name">Rádio Marchetti</p>
                <p className="text date">15/01/1970</p>
              </section>
            </div>
          </article>
        }
        { loading ? 
          <article className="article">
            <Skeleton variant="rect" height="15rem">
              <img src={radioPP} className="image" />
            </Skeleton>
            <Skeleton variant="text" >
              <h1 className="title">SandrinhaMine25</h1>
            </Skeleton>
            <div className="author-info">
              <Skeleton variant="circle" >
                <Avatar className="author-avatar"/>
              </Skeleton>
              <section>
                <Skeleton variant="text" >
                  <p className="text author-name">Rádio Marchetti</p>
                </Skeleton>
                <Skeleton variant="text" >
                  <p className="text date">15/01/1970</p>
                </Skeleton>
              </section>
            </div>
          </article>
        : 
          <article className="article">
            <img src="http://eeem.herokuapp.com/random/image" className="image" />
            <h1 className="title">SandrinhaMine25</h1>
            <div className="author-info">
              <Avatar className="author-avatar" src={radioPP} />
              <section>
                <p className="text author-name">Rádio Marchetti</p>
                <p className="text date">15/01/1970</p>
              </section>
            </div>
          </article>
        }
        { loading ? 
          <article className="article">
            <Skeleton variant="rect" height="15rem">
              <img src={radioPP} className="image" />
            </Skeleton>
            <Skeleton variant="text" >
              <h1 className="title">SandrinhaMine25</h1>
            </Skeleton>
            <div className="author-info">
              <Skeleton variant="circle" >
                <Avatar className="author-avatar"/>
              </Skeleton>
              <section>
                <Skeleton variant="text" >
                  <p className="text author-name">Rádio Marchetti</p>
                </Skeleton>
                <Skeleton variant="text" >
                  <p className="text date">15/01/1970</p>
                </Skeleton>
              </section>
            </div>
          </article>
        : 
          <article className="article">
            <img src="http://eeem.herokuapp.com/random/image" className="image" />
            <h1 className="title">SandrinhaMine25</h1>
            <div className="author-info">
              <Avatar className="author-avatar" src={radioPP} />
              <section>
                <p className="text author-name">Rádio Marchetti</p>
                <p className="text date">15/01/1970</p>
              </section>
            </div>
          </article>
        }
        { loading ? 
          <article className="article">
            <Skeleton variant="rect" height="15rem">
              <img src={radioPP} className="image" />
            </Skeleton>
            <Skeleton variant="text" >
              <h1 className="title">SandrinhaMine25</h1>
            </Skeleton>
            <div className="author-info">
              <Skeleton variant="circle" >
                <Avatar className="author-avatar"/>
              </Skeleton>
              <section>
                <Skeleton variant="text" >
                  <p className="text author-name">Rádio Marchetti</p>
                </Skeleton>
                <Skeleton variant="text" >
                  <p className="text date">15/01/1970</p>
                </Skeleton>
              </section>
            </div>
          </article>
        : 
          <article className="article">
            <img src="http://eeem.herokuapp.com/random/image" className="image" />
            <h1 className="title">SandrinhaMine25</h1>
            <div className="author-info">
              <Avatar className="author-avatar" src={radioPP} />
              <section>
                <p className="text author-name">Rádio Marchetti</p>
                <p className="text date">15/01/1970</p>
              </section>
            </div>
          </article>
        }
        { loading ? 
          <article className="article">
            <Skeleton variant="rect" height="15rem">
              <img src={radioPP} className="image" />
            </Skeleton>
            <Skeleton variant="text" >
              <h1 className="title">SandrinhaMine25</h1>
            </Skeleton>
            <div className="author-info">
              <Skeleton variant="circle" >
                <Avatar className="author-avatar"/>
              </Skeleton>
              <section>
                <Skeleton variant="text" >
                  <p className="text author-name">Rádio Marchetti</p>
                </Skeleton>
                <Skeleton variant="text" >
                  <p className="text date">15/01/1970</p>
                </Skeleton>
              </section>
            </div>
          </article>
        : 
          <article className="article">
            <img src="http://eeem.herokuapp.com/random/image" className="image" />
            <h1 className="title">SandrinhaMine25</h1>
            <div className="author-info">
              <Avatar className="author-avatar" src={radioPP} />
              <section>
                <p className="text author-name">Rádio Marchetti</p>
                <p className="text date">15/01/1970</p>
              </section>
            </div>
          </article>
        }
        <button className="button margintop75rem" onClick={() => {setTimeout(() => {setLoading(false)}, 1000)}}>
          Carregar
        </button>
      </div>
      <Footer />
    </>
  )
}
